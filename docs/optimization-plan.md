# Component Structure Optimization Plan

## Components to Consolidate

1. **Merge YearSelector into Footer**
   - The YearSelector component is only used within Footer
   - It's a small component that doesn't warrant separation
   - This reduces prop drilling and simplifies the component hierarchy

2. **Merge RightCornerControls into Canvas**
   - RightCornerControls is tightly coupled with Canvas zoom functionality
   - Consolidating will improve state management and reduce unnecessary props

3. **Create a unified controls system**
   - Standardize on the Button component throughout the app
   - Replace one-off button implementations in components like RightCornerControls

## Components to Enhance

1. **Canvas**
   - Implement the missing mode-specific rendering (cover vs month view)
   - Utilize the zustand store for zoom state management

2. **ContextualPanel**
   - Properly type the mode prop as 'cover' | 'month' instead of string
   - Implement actual functionality based on the selected mode

## Components to Keep Separate

1. **LeftSidebar, Footer, and ContextualPanel**
   - These represent distinct UI regions with different responsibilities
   - Keeping them separate maintains good separation of concerns