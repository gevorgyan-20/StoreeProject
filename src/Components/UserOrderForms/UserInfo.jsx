import React from 'react';

const UserInfo = () => {
    return (
        <div className='UserInfo'>
            <form  className="UInfLeft">
                <h1>Личные данные</h1>
                <input type="text" placeholder='Имя'/>
                <input type="text" placeholder='Фамилия'/>
                <input type="text" placeholder='Отчество'/>
            </form>

            <form className='UInfRight'>
                <h1>Изменить пароль</h1>
                <input type="text" placeholder='Изменить пароль'/>
                <input type="text" placeholder='Новый пароль'/>
                <input type="text" placeholder='Повторить пароль'/>
            </form>
        </div>
    );
}

export default UserInfo;
