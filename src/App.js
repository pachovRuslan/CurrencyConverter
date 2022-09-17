import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Block } from './components/Block';
import ExchangeRates from './components/ExchangeRates';
import Header from './components/Header';
import DarkMode from './components/DarkMode';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const ratesRef = React.useRef({})
  const [fromCurrency, setFromCurrency] = React.useState('BYN');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [toPrice, setToPrice] = React.useState(1);

  React.useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
    .then((res) =>res.json()
    .then((json) => {
      ratesRef.current =json.rates;
        onChangeToPrice(1)
      }),
    );
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    setFromPrice(value);
    setToPrice(result.toFixed(3));
  };

  const onChangeToPrice = (value) => {
    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  };

  React.useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  React.useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            height: '100vh',
          }}>
          <div class="App">
            <div class="div1">
              <DarkMode ColorModeContext={ColorModeContext} />
              <Header title={'Курсы валют'} />
            </div>

            <div class="div2">
              <ExchangeRates rates={ratesRef.current} />
            </div>
            <div class="div3">
              <Header title={'Конвертер валют'} />
            </div>
            <div class="div4">
              <Block
                currency={fromCurrency}
                value={fromPrice}
                onChangeCurrency={setFromCurrency}
                onChangeValue={onChangeFromPrice}
              />
            </div>
            <div class="div5">
              <Block
                currency={toCurrency}
                value={toPrice}
                onChangeCurrency={setToCurrency}
                onChangeValue={onChangeToPrice}
              />
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
