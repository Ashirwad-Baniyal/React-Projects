import { useState, useCallback, useEffect } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPass] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) {
      str += "1234567890";
    }
    if (char) {
      str += '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    }

    for (let a = 1; a <= length; a++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPass(pass);
  }, [char, num, length,setPass]);

  // useEffect(()=>{
  //   passGen()
  // },[length,num,char])

  const copyPasswordToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  }; 

  return (
    
      <div className="w-full max-w-md shadow-md rounded-lg px-4 py-3 my-3 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3 font-serif ">CipherKey</h1>

        {/* Display password + copy */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        {/* Options */}
        <div className="flex text-sm gap-x-2">
          {/* Length */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={num}
              id="numberInput"
              onChange={() => setNum((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={char}
              id="characterInput"
              onChange={() => setChar((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

        <button
          onClick={passGen}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg"
        >
          Generate Password
        </button>
      </div>
  );
}

export default App;
