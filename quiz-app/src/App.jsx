import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [options, setOptions] = useState([])
  const [selected, setSelected] = useState('')
  const [result, setResult] = useState(false)
  const [marks, setMarks] = useState(0)

  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setData(res)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
        console.log(err)
      })

  }, [])

  useEffect(() => {

    if (data.length > 0) {
      const mcqs = [...data[index].incorrectAnswers, data[index].correctAnswer].sort(() => Math.random() - 0.5);
      setOptions(mcqs)
      setSelected('')
    }

  }, [data, index])


  function changeIndex() {
    if (!selected) return;

    if (selected === data[index].correctAnswer) {
      setMarks(prev => prev + 10)
    }
    if (index === data.length - 1) {
      setResult(true)
      return
    }

    setIndex(prev => prev + 1)

  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
          {loading && <h1>Loading...</h1>}
          {error && <h1>Error occured</h1>}
          {result && <h1>Final scores : {marks}</h1>}
          <h2 className="text-lg font-semibold">
            {!loading && !error && !result &&
              data[index].question.text
            }
          </h2>


          {
            !result && options.map((item, i) => {
              return <div key={i} className="space-y-3">
                <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value={item}
                    checked={selected === item}
                    onChange={(e) => setSelected(e.target.value)}
                    name="options" />
                  <span>{item}</span>
                </label>
              </div>
            })
          }



          <button
            onClick={changeIndex}
            className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90">
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default App
