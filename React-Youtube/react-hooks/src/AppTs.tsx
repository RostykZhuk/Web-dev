import React, { useState, FC } from 'react';

interface IData {
  name: string;
  phone: string;
  postCode: number;
}

const AppTs: FC = () => {
  const [info, setInfo] = useState<IData>({} as IData);

  return <div>TS version</div>;
};

export default AppTs;
