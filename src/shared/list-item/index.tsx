interface Props {
  mainTitle: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
}

export default function ListItem({
  mainTitle,
  description,
  thumbnailUrl,
  thumbnailAlt,
}: Props) {
  return (
    <li className="w-full flex flex-col p-4 border border-solid border-green-500 rounded cursor-pointer hover:bg-green-300 hover:dark:bg-green-600">
      <img
        className="w-full aspect-square object-cover"
        src={thumbnailUrl}
        alt={thumbnailAlt}
      />
      <strong className="text-base font-bold">{mainTitle}</strong>
      <span className="text-sm font-normal">{description}</span>
    </li>
  );
}
