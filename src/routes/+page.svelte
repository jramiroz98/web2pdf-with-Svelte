<script lang="ts">
	import { jsPDF } from 'jspdf';
	function printPDF() {
		const doc = new jsPDF();
		doc.html(document.getElementById('toPrint'), {
			callback: function (doc) {
				doc.save();
			},
			x: 50,
			y: 50
		});
	}
</script>

<div id="toPrint">
	<h1>Hello PDF</h1>
	<p style="color:red">Hola mundo</p>
</div>
<a href="https://raw.githack.com/MrRio/jsPDF/master/docs/module-html.html">documentation</a>

<button on:click={() => printPDF()}>Generate PDF</button>
