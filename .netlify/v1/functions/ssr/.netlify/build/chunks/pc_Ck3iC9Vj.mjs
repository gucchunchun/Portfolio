const PCImage = new Proxy({"src":"/_astro/pc.92lhdMUO.jpg","width":1152,"height":1536,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/yuna/Documents/GitHub/Portfolio/src/assets/images/pc.jpg";
							}
							
							return target[name];
						}
					});

export { PCImage as default };
