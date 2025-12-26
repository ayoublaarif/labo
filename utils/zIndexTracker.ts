/**
 * Global z-index tracker
 * Scans all elements on the page to find the highest z-index value
 */

// Global variable to store the highest z-index found on the page
let globalHighestZIndex = 0

/**
 * Scans all elements in the document body to find the highest z-index
 * Filters out extremely high z-index values (like dev tools) and focuses on modals
 * @returns The highest z-index value found, or 1000 if none found
 */
export function scanHighestZIndex(): number {
  // Check if we're in a browser environment (not SSR)
  if (typeof window === 'undefined' || typeof document === 'undefined' || !document.body) {
    // During SSR, return default value
    globalHighestZIndex = 1000
    return globalHighestZIndex
  }
  
  let highest = 0
  const MAX_REASONABLE_Z_INDEX = 10000 // Filter out dev tools and system elements (usually > 10000)
  
  // Get all elements in the document
  const allElements = document.body.getElementsByTagName('*')
  
  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i] as HTMLElement
    const styles = window.getComputedStyle(element)
    const zIndex = styles.zIndex
    
    // Parse z-index value (can be 'auto', 'inherit', or a number)
    if (zIndex && zIndex !== 'auto' && zIndex !== 'inherit') {
      const zIndexNum = parseInt(zIndex, 10)
      // Only consider reasonable z-index values (filter out dev tools, etc.)
      if (!isNaN(zIndexNum) && zIndexNum > highest && zIndexNum <= MAX_REASONABLE_Z_INDEX) {
        highest = zIndexNum
      }
    }
  }
  
  // Update global only if we found a higher reasonable value, or if global is 0
  if (highest > 0 && highest > globalHighestZIndex) {
    globalHighestZIndex = highest
  } else if (globalHighestZIndex === 0) {
    globalHighestZIndex = highest > 0 ? highest : 1000
  }
  // If globalHighestZIndex is already set and higher than what we found, keep it (don't downgrade)
  
  // Log to console (only in browser)
  if (typeof console !== 'undefined') {
    console.log('🔍 Highest z-index on page (filtered):', globalHighestZIndex)
  }
  
  return globalHighestZIndex
}

/**
 * Gets the next z-index for a new element
 * Uses globalHighestZIndex + 1 without scanning (more efficient)
 * @returns The next z-index value to use
 */
export function getNextZIndex(): number {
  // Check if we're in a browser environment (not SSR)
  if (typeof window === 'undefined' || typeof document === 'undefined' || !document.body) {
    // During SSR, return default value
    if (globalHighestZIndex === 0) {
      globalHighestZIndex = 1000
    }
    const nextZIndex = globalHighestZIndex + 1
    globalHighestZIndex = nextZIndex
    return nextZIndex
  }
  
  // If global value is 0, scan first to initialize
  if (globalHighestZIndex === 0) {
    scanHighestZIndex()
  }
  
  // Use current global value + 1 for new modal
  const nextZIndex = globalHighestZIndex + 1
  globalHighestZIndex = nextZIndex
  
  // Log to console (only in browser)
  if (typeof console !== 'undefined') {
    console.log('📈 Global z-index:', globalHighestZIndex - 1, '→ New modal z-index:', nextZIndex)
  }
  
  return nextZIndex
}

/**
 * Gets the current global highest z-index without scanning
 * @returns The current global highest z-index value
 */
export function getGlobalHighestZIndex(): number {
  return globalHighestZIndex
}

/**
 * Updates the global highest z-index if the provided value is higher
 * @param zIndex The z-index value to check
 */
export function updateGlobalHighestZIndex(zIndex: number): void {
  if (zIndex > globalHighestZIndex) {
    globalHighestZIndex = zIndex
    // Log to console (only in browser)
    if (typeof console !== 'undefined') {
      console.log('⬆️ Updated global highest z-index:', globalHighestZIndex)
    }
  }
}

