import { useState } from 'react'
import './style.scss';
import { Button } from '../../components/shared/button';
import { Text3, Text7 } from '../../components/shared/typography';

export function CounterPage() {
    const [count, setCount] = useState<number>(0)
  return (
    <div className={'counter-page'}>
        <div className='counter-container'>
            <Text3>{count}</Text3>
            <div className={'counter-buttons'}>
                <Button title='button' onClick={ () => { setCount(count + 1) } }> <Text7>Increment</Text7> </Button>
                <Button title='button' styleType='outlined' onClick={ () => { setCount(count - 1) } }> <Text7>Dicrement</Text7> </Button>
            </div>
        </div>
    </div>
  );
}