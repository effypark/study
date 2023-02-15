import React from 'react';

const person = [
    {
        name: "tanaka",
        gender: "male",
        age: 2222,
        country: "japan",
        idx: 0,
    },
    {
        name: "peter",
        gender: "male",
        age: 111,
        country: "england",
        idx: 1,
    },
    {
        name: "kim",
        gender: "female",
        age: 222,
        country: "korea",
        idx: 2
    },
    {
        name: "Lee",
        gender: "male",
        age: 333,
        country: "korea",
        idx: 3
    },
    {
        name: "yojeff",
        gender: "male",
        age: 222,
        country: "deutschland",
        idx: 4
    },
    {
        name: "Ernst",
        gender: "male",
        age: 222,
        country: "deutschland",
        idx: 5
    },
]

//대상 객체에서 특정 값만 배열 형태로 추출합니다. 해당 값이 없는 객페는 출력되지 않습니다.
function extract<DataType, KeyType extends keyof DataType>( // <- KeyType은 DataType을 typeof로 변환한 값을 상속합니다.
//이를 실행해줌으로서 받아온 DataType에 어떤 데이터 타입이 들어 있던간에 알맞는 테이터 값을 지정해 줄 수 있습니다.
    items: DataType[], key: KeyType
): DataType[KeyType][] {
    return items.map(items=>items[key])
}

const TypeofTest: React.FunctionComponent = () => {
    const userNameList = extract(person,"name");
    console.log('userNameList',userNameList);

    return (
        <>
            {
                userNameList.map((item,idx) => (
                    <p key={idx}>{item}</p>
                ))
            }
        </>
    )
}

export default TypeofTest;