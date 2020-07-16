// useTitle 생성 -> useState 생성
// componentDitMount -> useEffect
// timeout -> titleUpdate -> setTitle -> title 변경 
// componentDitUpdate-> useEffect
export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]); // title이 바뀌면(setTitle) updateTitle 실행
    return setTitle;
}