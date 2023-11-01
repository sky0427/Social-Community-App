import { useEffect, useState } from 'react';

// debounce: 함수가 호출되는 속도를 제한하여 불필요하게 호출이 자주 일어나지 않도록 하는 방법이다.

export default function useDebounce<T>(value: T, delay: number): T {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		// Update debounced value of after delay
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Cancel the timeout if value changes (also on delay change or unmount)
		// This is how we prevent debounced value from updating if value is changed ...
		// .. within the delay period. Timeout gets cleared and restarted.
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]); // Only re-call effect if value or delay changes

	return debouncedValue;
}
