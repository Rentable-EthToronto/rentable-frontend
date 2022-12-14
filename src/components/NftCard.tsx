import * as React from "react";

export const NftCard: React.FC<{
  image: string;
  children: React.ReactElement<any, any>;
}> = ({ image, children }) => {
  return (
    <div className="m-9 flex md:w-1/4 w-1/2 flex-col rounded-3xl border border-spacing-2 border-slate-200 text-white hover:shadow-lg bg-slate-800">
      <div className="rounded-md">
        {image ? (
          <img
            src={image}
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: 24,
              borderTopLeftRadius: 24,
            }}
          />
        ) : (
          <img
            src={"/emptyNFT.jpeg"}
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: 24,
              borderTopLeftRadius: 24,
            }}
          />
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default NftCard;
