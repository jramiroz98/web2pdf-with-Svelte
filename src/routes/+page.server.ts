import type { PageServerLoad } from './$types';
import { jsPDF } from 'jspdf';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

import type { Actions } from './$types';

export const actions = {
    default: async (event) => {
        // TODO log the user in
        const doc = new jsPDF();
        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");

    },
} satisfies Actions;