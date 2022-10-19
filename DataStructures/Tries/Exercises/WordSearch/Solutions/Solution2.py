from ast import List


class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        product = []
        # searchWord: "teste"
        for i in range(len(searchWord)): # [0 - 4]
            p = []
            for prod in products:
                if prod.startswith(searchWord[:i+1]):
                    p.append(prod)
            p = sorted(p)[:3]
            product.append(p)
        return product
