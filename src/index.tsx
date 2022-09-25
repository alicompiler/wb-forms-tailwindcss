import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AllElementsExample} from './__examples__/AllElementsExample';
import {LayoutExample} from './__examples__/LayoutExample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <div className={'p-8'}>
          <AllElementsExample />
          <div className={'p-2 bg-primary-500 my-8'} />
          <LayoutExample />
      </div>
  </React.StrictMode>
);
