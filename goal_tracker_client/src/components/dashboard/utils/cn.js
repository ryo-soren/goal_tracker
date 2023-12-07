export default function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}

export const capitalizeFirstLetter = (phrase) => phrase.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())