export default {
    methods: {
        filterData(data) {
            return data.filter((p) => {
                return (
                  Object.values(p)
                    .join("")
                    .toLowerCase()
                    .indexOf(this.search.toLowerCase()) != -1
                );
              });
        }
    }
}