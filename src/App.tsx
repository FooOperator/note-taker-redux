import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/GlobalTheme'
import SharedLayout from './components/SharedLayout/SharedLayout'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'

const App: React.FC = () => {
  const modalActive = useSelector((state: RootState) => state.ui.modalActive);

  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <SharedLayout />
    </ThemeProvider>
  )
}

export default App
{/* <Tree data={
        [
          {
            label: "First Folder",
            children: [
              { children: [], label: "First child" },
              { children: [], label: "Second child" }
            ]
          },
          {
            label: "Second Folder",
            children: [
              { children: [
                { children: [], label: "First child" },
              ], label: "First child" },
              { children: [], label: "Second child" }
            ]
          }
        ]
      } /> */}