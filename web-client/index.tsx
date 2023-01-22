import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Page } from './page';
import { DragNDrop } from './drag-n-drop';
import './styles/index.scss';

function Index() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/*' element={<Page/>}/>
          <Route path='/drag-n-drop' element={<DragNDrop/>}/>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

const init = () => {
  const id = 'app';
  const rootEl = document.getElementById(id);
  if (!rootEl) {
    throw new Error(`Document not have element with id=${id}`);
  }
  const root = createRoot(rootEl);
  root.render(<Index/>);
};

init();

export {
  init,
  Page,
  Index
};
