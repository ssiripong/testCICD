'use client';
import axios from 'axios';

export default function Home() {
  const handleClick = async () => {
    const response = await axios.get('http://localhost:3000/api/get');
    console.log(response.data);
  };

  return (
    <div>
      <button className='bg-blue-500' onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
