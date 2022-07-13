const Footer = () => {
	return (
		<footer className="w-full fixed bottom-0 text-center p-2">
			<p>
				made by <span> </span>
				<a
					href="https://github.com/evebyte"
					target="_blank"
					className="font-bold underline
					text-green-900 dark:text-green-300  
					hover:text-orange-600 dark:hover:text-orange-500"
					rel="noopener noreferrer"
				>
					eve
				</a>
			</p>
		</footer>
	);
};

export default Footer;
