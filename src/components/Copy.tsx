import { useState } from 'react';

export default function Copy(props) {
  const { copyText } = props;
  const [hide, setHide] = useState(false);

  async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);

      setHide(true);
      setTimeout(() => {
        setHide(false);
      }, 200);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="flex items-center">
      <div>
        <div className="uppercase text-blue-600 font-bold text-xl">Contract Address</div>
        <div className="font-bold md:text-2xl text-sm break-all">{copyText}</div>
      </div>
      <div
        onClick={() => writeClipboardText(copyText)}
        className={`${hide ? 'animate-ping opacity-50' : ''} cursor-pointer px-1 py-3`}
      >
        {props.children}
      </div>
    </div>
  );
}
