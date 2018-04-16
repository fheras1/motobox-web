export class Box {
    id: string;
    address: string;
    name: string;
    contact: string;
    image?: string;
    reviews: Array<string> = new Array();

    public asFormData(): FormData {
        const data = new FormData();
        data.append('address', this.address);
        data.append('name', this.name);
        data.append('contact', this.contact);
        for (const reviews of this.reviews) {
            data.append('reviews', reviews);
        }
        data.append('image', this.image);

        return data;
    }
}
