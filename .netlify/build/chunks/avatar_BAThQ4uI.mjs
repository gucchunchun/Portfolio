const AvatarImage = new Proxy({"src":"/_astro/avatar.Ubab6vCJ.jpg","width":1536,"height":1536,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/yuna/Documents/GitHub/Portfolio/src/assets/images/avatar.jpg";
							}
							
							return target[name];
						}
					});

export { AvatarImage as default };
