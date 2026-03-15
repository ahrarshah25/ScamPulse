import React from "react";

const Companies = () => {
  return (
    <div className="mt-[110px] relative w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] mx-auto">

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <img
          src="/logo.png"
          alt="ScamPulse"
          className="w-20 sm:w-28 rounded-full shadow-lg bg-white p-2"
        />
      </div>

      <div
        className="absolute inset-[-10%] rounded-full border border-teal-400"
        style={{ animation: "spinSlow 18s linear infinite" }}
      >
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-white rounded-full p-1 shadow"
          alt="Google"
        />
      </div>

      <div
        className="absolute inset-[1%] rounded-full border border-teal-400"
        style={{ animation: "spinReverse 24s linear infinite" }}
      >
        <img
          src="https://cyclr.com/nitropack_static/VuXxlbQNhqQgnktlfMtCedOWhlGohlKT/assets/images/optimized/rev-0d98353/cyclr.com/wp-content/uploads/2025/06/ext-4.png"
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-white rounded-full p-1 shadow"
          alt="AI Powered Detection"
        />
      </div>

      <div
        className="absolute inset-[10%] rounded-full border border-teal-400"
        style={{ animation: "spinSlow 32s linear infinite" }}
      >
        <img
          src="https://images.seeklogo.com/logo-png/20/1/norton-by-symantec-logo-png_seeklogo-201265.png"
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-white rounded-full p-1 shadow"
          alt="API"
        />
      </div>

      <div
        className="absolute inset-[20%] rounded-full border border-teal-400"
        style={{ animation: "spinReverse 40s linear infinite" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-white rounded-full p-1 shadow"
          alt="Microsoft"
        />
      </div>

      <div
        className="absolute inset-[29%] rounded-full border border-teal-400"
        style={{ animation: "spinReverse 30s linear infinite" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-white rounded-full p-1 shadow"
          alt="Microsoft"
        />
      </div>

      <div
        className="absolute inset-[-20%] rounded-full border border-teal-400"
        style={{ animation: "spinReverse 20s linear infinite" }}
      >
        <img
          src="/openai.png"
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-white rounded-full p-1 shadow"
          alt="Microsoft"
        />
      </div>

    </div>
  );
};

export default Companies;
