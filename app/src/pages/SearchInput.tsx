import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
  nama_ko: string;
}

//상단에 선언한 interface를 사용함을 선언해줍니다.
const products: Item[] = [
  {
    id: 1,
    name: 'Apple',
    nama_ko: '사과',
  },
  {
    id: 2,
    name: 'Persimmon',
    nama_ko: '감',
  },
  {
    id: 3,
    name: 'Pear',
    nama_ko: '배',
  },
  {
    id: 4,
    name: 'koreaMelon',
    nama_ko: '참외',
  },
  {
    id: 5,
    name: 'Fig',
    nama_ko: '무화과',
  },
  {
    id: 6,
    name: 'Pomegranate',
    nama_ko: '석류',
  },
  {
    id: 7,
    name: 'Jujube',
    nama_ko: '대추',
  },
  {
    id: 8,
    name: 'Mango',
    nama_ko: '망고',
  },
  {
    id: 9,
    name: 'Yuja',
    nama_ko: '유자',
  },
];

const SearchInput = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState<Item[] | undefined>();
  
    // 입력이 변경될 때 동작합니다.
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const enteredName = event.target.value;
      setQuery(enteredName);
    };
  
    // 검색 버튼을 클릭 시 동작합니다.
    const search = () => {
      const regex = /[a-zA-Z]/;
      console.log(regex.test(query.toLowerCase()));
      let foundItems:Item[] = [];
      let langugeType = regex.test(query.toLowerCase()) ? "En":"Ko";
      
      foundItems = products.filter((item) => {
        if (langugeType === 'En') {
          return item.name.toLowerCase().includes(query.toLowerCase())
        } else {
          return item.nama_ko.toLowerCase().includes(query.toLowerCase())
        }
      });
      setResult(foundItems);
    };
  
    return (
      <div className="container">
        <div className="wrapper">
          <input
            value={query}
            onChange={inputHandler}
            placeholder="Search products"
            className="input"
          />

          <button onClick={search}>Search</button>
        </div>
  
        {/* Display search result */}
        <div className="search-result">
          <h4>키워드 필터링</h4>
          {result && result.length > 0 ? (
            result.map((item) => (
              <li key={item.id} className="item">
                <span className="item-name">{item.name}</span>
                <span className="item-nama_ko">({item.nama_ko})</span>
              </li>
            ))
          ) : (
            products.map((item) => (
              <li key={item.id} className="item">
                <span className="item-name">{item.name}</span>
                <span className="item-nama_ko">({item.nama_ko})</span>
              </li>
            ))
          )}
        </div>
      </div>
    );
}

export default SearchInput;