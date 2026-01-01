import React, { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [password, setPassword] = useState("")

  const passwordRef = useRef()

  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+-=[]{}|<>/?~"


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, characterAllowed, numberAllowed, setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, characterAllowed, generatePassword])
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-4'>
        <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8">

          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            🔐 Password Generator
          </h1>


          <div className="flex items-center gap-2 mb-6">
            <input
              type="text"
              placeholder="Generated password"
              readOnly
              ref={passwordRef}
              value={password}
              className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            />
            <button onClick={copyToClipboard} className="cursor-pointer px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-95 transition">
              Copy
            </button>
          </div>


          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-700 font-medium">Length</label>
              <span className="text-indigo-600 font-semibold">{length}</span>
            </div>
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>


          <div className="space-y-3">
            <label className="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-3 cursor-pointer">
              <span className="text-gray-700 font-medium">Numbers</span>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="w-5 h-5 accent-indigo-600" />
            </label>

            <label className="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-3 cursor-pointer">
              <span className="text-gray-700 font-medium">Characters</span>
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="w-5 h-5 accent-indigo-600" />
            </label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
