interface TicketPageProps {
    params: {
        id: string;
    };
}

const TicketPage = ({params: {id}}: TicketPageProps) => {
    return (
        <div>
            <h1>Ticket Page</h1>
            <p>This is the ticket page where you can view and manage your tickets.</p>
            <p>Ticket ID: {id}</p>
        </div>
    )
}

export default TicketPage;