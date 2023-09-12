import "../css/game.css";
import React, { useState, useEffect } from 'react';


function Panel({ isActive, onShow, level, upgradeLevel, score, power, onClick }) {
    return (
        <section>

            {isActive ? (
                    <div className="mainPage">
                        <p className="p level">Уровень: {level}</p>
                        <p className="p point">Очки: {score}</p>
                        <p className="p power">Стоимость улучшения: {level * 10}</p>
                        <button className='btnUpgrade' onClick={upgradeLevel}/>
                        <button className="shop-back" onClick={onShow}>Back</button>
                    </div>) 
                    : 
                (<div className="mainPage">
                    <p className="p level">Уровень: {level}</p>
                    <p className="p point">Очки: {score}</p>
                    <p className="p power">Сила клика: {power}</p>
                    <button className='btnClicker' onClick={onClick} />
                    <button className="shop-back" onClick={onShow}>Shop</button>
                </div>)}
        </section>
    )
}

const ClickerGame = () => {
    const [score, setScore] = useState(Number(localStorage.getItem('score')) || 0);
    const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);
    const [clickPower, setClickPower] = useState(1);

    useEffect(() => {
        setClickPower(level);

    }, [level]);

    const handleButtonClick = () => {
        const newScore = parseInt(score, 10) + clickPower;
        setScore(newScore);
        localStorage.setItem('score', newScore)
    };

    const upgradeLevel = () => {
        const upgradeCost = level * 10;
        if (score >= upgradeCost) {
            const newLevel = parseInt(level, 10) + 1;
            setLevel(newLevel);
            localStorage.setItem('level', newLevel);

            const newScore = score - upgradeCost;
            setScore(newScore);
            localStorage.setItem('score', newScore)
        } else {
            alert('Недостаточно очков для улучшения!');
        }
    };
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div>
            <Panel
                isActive={activeIndex === 1}
                onShow={ activeIndex === 1 ? (() => setActiveIndex(0)) : (() => setActiveIndex(1)) }
                level={level}
                upgradeLevel={() => upgradeLevel()}
                score={score}
                power={clickPower}
                onClick={() => handleButtonClick()}
            />
        </div>
    );
}

export default ClickerGame;
