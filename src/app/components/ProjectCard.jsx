import Image from "next/image";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-2xl">
        <Image width={500} height={500} src={imgUrl} alt={title} className="w-full h-60 object-cover transition duration-300 transform hover:scale-110" />
        <div className="p-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
          <span className="text-gray-600 text-sm">{description}</span>
        </div>
      </div>
    </div>
  );
};
