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
    <div className="flex items-center w-full justify-between">
      <div>
        <div className="uppercase text-blue-600 font-bold text-xl">Contract Address</div>
        <div className="font-bold text-2xl max-[600px]:text-sm break-all">{copyText}</div>
      </div>
      <div
        onClick={() => writeClipboardText(copyText)}
        className={`${hide ? 'animate-ping opacity-50' : ''} cursor-pointer p-2 md:p-4 ml-2 md:ml-4`}
      >
        {props.children}
      </div>
    </div>
  );
}
