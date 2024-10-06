const loadModels = (loader, models, scene, planets) => {
    models.forEach(({ name, path, position, scale}) => {
        loader.load(path, (gltf) => {
            const planet = gltf.scene;
            planet.name = name;
            if(planet.name === "space"){ planet.selectable = false;} else { planet.selectable = true;}

            planet.traverse((child) => {
                if (child.isMesh) {
                    child.name = name; // Nombre asignado a cada Mesh.
                }
            });

            planet.position.set(...position);
            planet.scale.set(scale, scale, scale); 
            scene.add(planet);
            planets[name] = planet;
        }, undefined, (error) => {
            console.error(`Error loading ${path}:`, error);
        });
    });
};

export default loadModels;