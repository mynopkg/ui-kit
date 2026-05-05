import { Tabs } from './components/ui/tabs'

function App() {
  return (
    <div>
      <Tabs
        variant="underline"
        tabs={[
          {
            value: 'tab1',
            label: 'Tab 1',
            content: <div>Content for Tab 1</div>,
            disabled: false,
          },
          {
            value: 'tab2',
            label: 'Tab 2',
            content: <div>Content for Tab 2</div>,
            disabled: false,
          },
          {
            value: 'tab3',
            label: 'Tab 3',
            content: <div>Content for Tab 3</div>,
            disabled: false,
          },
          {
            value: 'tab4',
            label: 'Tab 4',
            content: <div>Content for Tab 4</div>,
            disabled: false,
          },
        ]}
      />
    </div>
  )
}

export default App
