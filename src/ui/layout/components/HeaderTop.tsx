import React from "react"

const HeaderTop = ({ currency, setCurrency, currentLanguageCode, dispatch, borderStyle }: any) => {
  return (
    <div className="header-top-wap">
      {/* <LanguageCurrencyChanger
        currency={currency}
        setCurrency={setCurrency}
        currentLanguageCode={currentLanguageCode}
        dispatch={dispatch}
      /> */}
      <div className="header-offer">
        <p>
          Free delivery on order over
          <span>{currency.currencySymbol + (200 * currency.currencyRate).toFixed(2)}</span>
        </p>
      </div>
    </div>
  )
}

export default HeaderTop
