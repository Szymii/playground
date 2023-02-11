import { BrowserRouter, Route, Routes } from "react-router-dom";

export const withReactRouter = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return (Story) => (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
};
