type CardProps = {
  title: string;
  imageUrl: string;
};

export default function Card({ title, imageUrl }: CardProps) {
  return (
    <div className="card bg-white rounded shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-sm font-semibold w-full overflow-x-hidden text-nowrap overflow-ellipsis">
          {title}
        </h3>
      </div>
    </div>
  );
}
