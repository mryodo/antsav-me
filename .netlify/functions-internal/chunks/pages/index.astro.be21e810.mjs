import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.bb72bab2.mjs';
import { $ as $$Icon, a as $$News, b as $$Layout } from './archive.astro.1a70c4bb.mjs';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'svgo';
/* empty css                             */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "center": ($$result2) => renderTemplate`${maybeRenderHead()}<div>
	<h2> ${renderComponent($$result2, "Icon", $$Icon, { "width": 19, "name": "refresh", "class": "inline-icon" })} Quick Updates   <a href="/archive/" class="archiveRef">&nbsp; all &nbsp;</a> </h2> 

	<div class="newsContainer2">
		${renderComponent($$result2, "News", $$News, {})}
	</div>
</div>`, "left": ($$result2) => renderTemplate`<div>
	<h2>  Hello!</h2> 

	<p> My name is <b> Tony Savostianov</b>. I am a <i>post-graduate researcher</i> at the <a href="https://www.netsci.rwth-aachen.de/go/id/lzwwm/?lidx=1">Computational Network Science Group</a> at RWTH, Aachen. </p>
	<p>
	Recently I've submitted my PhD in <mark>Mathematics in Natural Science</mark> at <span class="rainbowGSSI"><a href="https://gssi.it">Gran Sasso Science Institute</a></span> in <i> L'Aquila, Italy</i>.
	</p>
	<p>
	My current work is focuses on the numerical methods for <mark>Network Sciences</mark>.  My previous work included:
	</p><ul>
	   <li> coupled (nonlinear) oscillators for modelling <span class="mark2">solar activity</span></li>
	   <li> detection of 3D structure in <span class="mark2">chromatine</span> via CV methods</li>
	   <li> quasi stationary points in <span class="mark2">spatially-heterogeneous models of biocommuinites</span></li>
	</ul>
</div>` })}`;
}, "/Users/mryodo/astro2/evolved-earth/src/pages/index.astro", void 0);

const $$file = "/Users/mryodo/astro2/evolved-earth/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
