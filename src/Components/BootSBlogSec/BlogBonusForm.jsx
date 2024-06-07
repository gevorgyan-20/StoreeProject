import React from 'react';
import "./BonusForm.css"


const BlogBonusForm = () => {
    return (
        
            
            <form >
                <span>
                 <input type="text" placeholder='Введите Ваш email' />
                 <div className="InpLine"></div>
                </span>
                 <button>Подписаться</button>
                 <a href="">Политика конфиденциальности</a>
            </form>
        
    );
}

export default BlogBonusForm;
