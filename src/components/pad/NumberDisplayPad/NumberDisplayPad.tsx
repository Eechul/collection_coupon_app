import NumberDisplay from "../NumberDisplay/NumberDisplay";
import NumberPad from "../NumberPad/NumberPad";

interface NumberDisplayPadProps {
  submitButtonText: string;
}

export default function NumberDisplayPad({ submitButtonText }: NumberDisplayPadProps) {

    return (
      <div className='flex h-full flex-col'>
        <div className='block flex grow-1 justify-center text-center text-4xl'>
          <NumberDisplay />
        </div>
        <div className='grow-3'>
          <NumberPad submitButtonText={submitButtonText} />
        </div>
      </div>
    )
}