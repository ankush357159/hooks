## When to Use useCallback

- **Passing Functions as Props**: If a function is being passed as a prop to a child component
  that uses React.memo, using useCallback can prevent the child component from re-rendering
  unnecessarily.

- **Performance Optimization**: In complex applications where performance is a concern, memoizing
  functions that are computationally expensive to recreate can be beneficial.

- **Stable References**: If a function needs to maintain a stable reference for use in a dependency
  array (e.g., for useEffect), useCallback can be useful.

## When Not to Use useCallback

- **No Performance Issue**: If the component and its children are simple and inexpensive to re-render,
  the overhead of using useCallback might outweigh the benefits. The function creation in JavaScript is generally cheap, and the actual re-renders are often more costly.

- **Overhead**: useCallback adds a bit of overhead due to the dependency checking mechanism. If not used judiciously, it can lead to more complexity without tangible performance gains.

- **Unnecessary Memoization**: If a function is not being passed down as a prop or is not part of an
  expensive calculation, memoizing it with useCallback might be unnecessary.
