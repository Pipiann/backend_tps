class ProductManager {
    constructor() {
      this.products = [];
      this.idAutoincremental = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar campos obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('Todos los campos son obligatorios.');
        return;
      }
  
      // Validar que el código no esté repetido
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        console.log('El código de producto ya existe.');
        return;
      }
  
      const product = {
        id: this.idAutoincremental,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      this.idAutoincremental++;
      console.log(`Producto agregado:,${product}`);
    }
  
    getProduct() {
      return this.products;
    }
  
    getProductById(id) {
    
    const product= this.products.filter (product => product.id === id);
    if (product) {
            return product;
          } else {
            console.log('not found');
            // return null;
          }
    }
  }
  
  // Ejemplos
  const manager = new ProductManager();
  
  manager.addProduct('Camiseta', 'Camiseta de algodon', 3000, 'thumbnail1.jpg', 'CAM1', 10);
  manager.addProduct('Pantalón', 'jean', 10000, 'thumbnail2.jpg', 'JEA1', 5);
  manager.addProduct('Zapatos', 'Zapatos de cuero', null, 'thumbnail3.jpg', 'ZAP1', 3); // producto con campo obligatorio faltante
  manager.addProduct('Camiseta', 'Camiseta de algodón', 25.99, 'thumbnail4.jpg', 'CAM1', 8); // producto con código repetido
  
  console.log(manager.getProduct());
  console.log(manager.getProductById(2));
  