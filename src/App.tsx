import { useState } from 'react';
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Timbo Testing</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p className="tw-text-3xl">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Button variant="secondary">React Button</Button>
      </div>
      <p className="tw-text-2xl tw-text-emerald-600">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
