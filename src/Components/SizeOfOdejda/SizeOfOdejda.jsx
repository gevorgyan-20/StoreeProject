import React from 'react'

const SizeOfOdejda = () => {
    const Sizes = [42, 44, 46, 48, 50, 52, 54, 56, 58]
  return (
    <div>
      <h1>Размер</h1>
      <div className="FSizesBlock">
        {Sizes.map((numb) => {
          return (
            <div key={numb} className="FSizesButt">
              <span>{numb}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SizeOfOdejda