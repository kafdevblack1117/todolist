import React, {useState} from 'react';

const Say = () => {
const [message, setMessage] = useState('');
const onClickEnter = () => setMessage('안녕하세요');
const onClickLeave = () => setMessage('안녕히 가세요!');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

//useState 함수의 인자에는 상태 초기값을 넣어 준다.

export default Say;