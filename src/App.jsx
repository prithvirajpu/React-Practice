import Background from './practice_questions/background.jsx'
import CharacterCount from './practice_questions/CharacterCount.jsx'
import Counter from './practice_questions/Counter.jsx'
import Form from './practice_questions/Form.jsx'
import InputDisplay from './practice_questions/InputDisplay.jsx'
import LiveText from './practice_questions/LiveText.jsx'
import LoginPage from './practice_questions/LoginPage.jsx'
import OddEven from './practice_questions/OddEven.jsx'
import SumOfCounter from './practice_questions/SumOfCounter.jsx'
import Temparature from './practice_questions/Temparature.jsx'
import TextMatching from './practice_questions/TextMatching.jsx'
import ThemeToggle from './practice_questions/ThemeToggle.jsx'
import TodoList from './practice_questions/TodoList.jsx'
import ToggleHide from './practice_questions/ToggleHide.jsx'
import CountChange from './practice_questions/CountChange.jsx'
import CustomHook from './practice_questions/useCustomHook.jsx'
import react,{useState} from 'react'
import useCustomHook from './practice_questions/useCustomHook.jsx'
import HookUsing from './practice_questions/HookUsing.jsx'
import FocusInput from './practice_questions/FocusInput.jsx'
import Timer from './practice_questions/Timer.jsx'
import PrevValue from './practice_questions/PrevValue.jsx'
import PropsPassing from './practice_questions/PropsPassing.jsx'

function App() {  
  const [val,setVal]=useState(0)
  
    return( 
        
      <PropsPassing val={val} handleAdd={setVal} />

        )
}

export default App
