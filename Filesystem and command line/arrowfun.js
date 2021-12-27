const book = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printlist() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

book.printlist()

