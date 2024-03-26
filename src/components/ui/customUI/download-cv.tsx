"use client";

import useDownloader from "react-use-downloader";

export const DownloadCV = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/file/CV.pdf";
  const filename = "CV_Dimas Prihady.pdf";

  return (
    <div>
      <button
        onClick={() => download(fileUrl, filename)}
        className="text-xs flex rounded-md border border-slate-700/30 bg-slate-700/30 px-2 py-2 font-semibold text-slate-400 transition duration-300 ease-in-out hover:cursor-pointer hover:border-purple-400 hover:bg-[#c084fc] hover:text-white md:rounded-xl md:px-4 md:py-[0.85rem] md:text-lg"
      >
        Download CV
      </button>
    </div>
  );
};
