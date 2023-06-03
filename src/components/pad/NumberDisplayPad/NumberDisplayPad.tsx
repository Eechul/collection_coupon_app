"use client"

import NumberDisplay from "../NumberDisplay/NumberDisplay"
import NumberPad from "../NumberPad/NumberPad"


interface NumberDisplayPadProps {
  submitButtonText: string;
  movePage: string;
  randomPadNumber?: boolean;
  action?: any;
}

export default function NumberDisplayPad({ submitButtonText, movePage, randomPadNumber = false, action = null}: NumberDisplayPadProps) {

    // 적립버튼, 사용/조회버튼, 인증버튼 구분을 어떻게 할까
    // 리덕스를 사용해서 액션을 달리하면 되지 않을까?
    // SUBMIT_SAVE: 적립 액션 이름
    // SUBMIT_USE: 사용/조회 액션 이름

    return (
      <div className='flex h-full flex-col'>
        <div className='block flex grow-1 justify-center text-center text-4xl'>
          <NumberDisplay />
        </div>
        <div className='grow-3'>
          <NumberPad submitButtonText={submitButtonText} movePage={movePage} randomPadNumber={randomPadNumber} />
        </div>
      </div>
    )
}