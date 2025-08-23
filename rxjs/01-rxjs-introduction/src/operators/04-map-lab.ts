import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum nunc nunc, ac suscipit sem condimentum at. Donec a augue fermentum, auctor dui ac, sagittis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tellus porttitor, venenatis metus at, aliquet mauris. Quisque ipsum nibh, consequat ut dictum non, tempus vel turpis. Vivamus diam urna, rutrum sit amet ultricies ut, iaculis vel urna. Sed eleifend bibendum venenatis.
<br /><br />
Cras sapien leo, euismod vitae ex eu, vehicula dictum neque. Praesent ultrices congue est sit amet maximus. Fusce quis augue sed orci consectetur fringilla. Proin et lectus placerat, tempus ipsum et, placerat mi. In sapien tortor, bibendum in erat in, blandit vehicula odio. Vestibulum varius ante tortor, in blandit eros congue a. Duis nibh felis, auctor eget ornare nec, tincidunt in velit. Aliquam ullamcorper lacus ut metus lobortis, sit amet pharetra est euismod. Cras vehicula nunc erat. Curabitur fermentum massa non purus aliquam aliquet. Sed malesuada, orci et interdum rhoncus, velit ligula semper nulla, vitae vulputate turpis dui ac nisl. Proin urna augue, vulputate fringilla lacus non, accumsan ultricies risus. Suspendisse vehicula dolor sit amet interdum lacinia. Phasellus venenatis enim non libero vestibulum facilisis. Maecenas sit amet vulputate nunc, et venenatis nibh.
<br /><br />
Suspendisse mattis nec magna ut tincidunt. Sed eu lobortis nibh. Aenean dapibus felis lorem, vulputate eleifend tellus aliquet non. Aenean iaculis sem quis tortor semper pharetra. Aliquam varius sem commodo diam rhoncus, sit amet fringilla lectus eleifend. Proin ornare odio vulputate nibh porttitor hendrerit. Ut eu auctor ante, sed viverra sem. Phasellus vulputate, odio vitae rhoncus ornare, lectus arcu semper leo, nec volutpat mi nunc vel erat.
<br /><br />
Cras nibh nisl, elementum pharetra volutpat ut, pretium id diam. Etiam vitae volutpat metus. Aliquam commodo neque in dui porta, nec ultricies odio tempus. Duis vel egestas ligula, et vulputate tortor. Vivamus augue mauris, facilisis quis neque vitae, euismod tincidunt nunc. Maecenas condimentum mollis felis, ac elementum est pellentesque sed. Sed lobortis placerat risus, consectetur ornare purus bibendum eget. Nunc in interdum orci, at tincidunt felis. Integer et risus ut tortor molestie faucibus. Nulla facilisi. Proin nec scelerisque felis. Proin sodales sem eget nisi finibus, consectetur tincidunt dolor blandit. Phasellus consequat hendrerit commodo. Donec auctor bibendum lobortis. Mauris at ex ullamcorper, facilisis risus ut, iaculis diam. Nullam volutpat tortor arcu, id mollis lacus maximus vitae.
<br /><br />
Suspendisse magna risus, malesuada vel vestibulum nec, ullamcorper eget quam. Sed id dui ut enim porttitor congue. Nullam sit amet purus in nunc tempus consequat et eget mi. Phasellus at euismod erat. Proin faucibus maximus lacus, vitae volutpat diam eleifend vehicula. Quisque pretium tincidunt lacus quis porta. Morbi bibendum magna eget eros egestas consectetur. Ut purus risus, hendrerit vitae turpis nec, pretium ultricies turpis. Fusce viverra magna sed velit porta, vitae gravida justo accumsan. Fusce vehicula mi eu neque posuere facilisis. Phasellus rutrum pharetra vestibulum. Etiam congue elementum augue, vel elementum est venenatis at. Nulla porttitor libero at pharetra pulvinar. Sed maximus porttitor risus quis tempus.
<br /><br />
Sed pulvinar nunc vitae odio porta, a rutrum ligula gravida. Proin pulvinar mi eros. Vestibulum sit amet cursus lacus. Aliquam tincidunt blandit nulla et dictum. Duis molestie ipsum in enim laoreet vulputate. Cras ligula lacus, blandit nec lorem in, mattis sodales nunc. Aliquam venenatis suscipit nibh ut auctor. Duis vehicula mauris sem, ac tempor justo finibus non. Etiam eget magna vitae est venenatis faucibus non hendrerit felis. Integer convallis ex at consectetur vulputate. Nam at risus pharetra, venenatis massa nec, aliquam est. In vestibulum, neque in luctus suscipit, est eros semper leo, sit amet facilisis nunc nulla in nisi.
<br /><br />
Donec ut dui eu lorem tempus aliquam. Donec scelerisque cursus lacus, sed tincidunt dui vestibulum in. Nam accumsan porta hendrerit. Sed pulvinar lectus massa, at posuere felis fermentum eget. Cras sit amet consequat eros. Praesent pretium pellentesque nulla sit amet pretium. Etiam consequat lacinia aliquet. Pellentesque non consequat dolor, facilisis venenatis lorem. Nunc a velit eros.
<br /><br />
Praesent vel sapien tristique velit mattis pharetra faucibus dignissim ipsum. Maecenas vitae fermentum neque. Proin diam velit, sagittis id auctor nec, elementum sit amet metus. Etiam sed vehicula urna. Fusce volutpat malesuada quam, eget sodales lacus condimentum nec. Aliquam dapibus nec ligula in congue. Mauris viverra malesuada risus, ac vestibulum ligula iaculis vel. Donec velit risus, ornare at urna quis, interdum ullamcorper lectus.
<br /><br />
In arcu sapien, tincidunt non porttitor quis, accumsan id ex. Praesent non tempus odio, non vestibulum dolor. Duis porttitor nibh non tortor auctor consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Phasellus a mi rhoncus, pellentesque urna vel, pharetra diam. Cras sed justo eget felis auctor laoreet eget eget enim. Quisque bibendum est enim, eget euismod neque facilisis a. Suspendisse enim diam, pulvinar eget feugiat at, fringilla non dolor.
<br /><br />
Vivamus congue, leo vitae iaculis tempor, magna mi rhoncus quam, sit amet aliquet dolor dui in mi. Ut nec lorem vel enim vehicula ultricies. Pellentesque a nibh magna. Donec felis est, vehicula in tincidunt vel, aliquet et massa. Maecenas nec venenatis dui. Quisque sit amet lectus posuere, placerat lacus a, volutpat eros. Pellentesque pulvinar ipsum ac arcu feugiat, quis dapibus ligula dapibus. Nulla facilisi. In rutrum tellus sit amet enim dictum, non efficitur mi efficitur. Nullam vehicula eget ligula vel dictum.
<br /><br />
In arcu sapien, tincidunt non porttitor quis, accumsan id ex. Praesent non tempus odio, non vestibulum dolor. Duis porttitor nibh non tortor auctor consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Phasellus a mi rhoncus, pellentesque urna vel, pharetra diam. Cras sed justo eget felis auctor laoreet eget eget enim. Quisque bibendum est enim, eget euismod neque facilisis a. Suspendisse enim diam, pulvinar eget feugiat at, fringilla non dolor.
<br /><br />
Vivamus congue, leo vitae iaculis tempor, magna mi rhoncus quam, sit amet aliquet dolor dui in mi. Ut nec lorem vel enim vehicula ultricies. Pellentesque a nibh magna. Donec felis est, vehicula in tincidunt vel, aliquet et massa. Maecenas nec venenatis dui. Quisque sit amet lectus posuere, placerat lacus a, volutpat eros. Pellentesque pulvinar ipsum ac arcu feugiat, quis dapibus ligula dapibus. Nulla facilisi. In rutrum tellus sit amet enim dictum, non efficitur mi efficitur. Nullam vehicula eget ligula vel dictum.
<br /><br />
In arcu sapien, tincidunt non porttitor quis, accumsan id ex. Praesent non tempus odio, non vestibulum dolor. Duis porttitor nibh non tortor auctor consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Phasellus a mi rhoncus, pellentesque urna vel, pharetra diam. Cras sed justo eget felis auctor laoreet eget eget enim. Quisque bibendum est enim, eget euismod neque facilisis a. Suspendisse enim diam, pulvinar eget feugiat at, fringilla non dolor.
<br /><br />
Vivamus congue, leo vitae iaculis tempor, magna mi rhoncus quam, sit amet aliquet dolor dui in mi. Ut nec lorem vel enim vehicula ultricies. Pellentesque a nibh magna. Donec felis est, vehicula in tincidunt vel, aliquet et massa. Maecenas nec venenatis dui. Quisque sit amet lectus posuere, placerat lacus a, volutpat eros. Pellentesque pulvinar ipsum ac arcu feugiat, quis dapibus ligula dapibus. Nulla facilisi. In rutrum tellus sit amet enim dictum, non efficitur mi efficitur. Nullam vehicula eget ligula vel dictum.
`;

const body = document.querySelector('body')!;
body.append(text);

const postgressBar = document.createElement('div');
postgressBar.classList.add('progress-bar');
body.append(postgressBar);

// Función para hacer el calculo
const calculateProgressPercetange = (event: Event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = (event.target as Document).documentElement!;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
  // map((event) => calculateProgressPercetange(event))
  map<Event, number>(calculateProgressPercetange),
  // tap((value) => console.log(value))
  tap<number>(console.log),
);

progress$.subscribe((value) => {
  postgressBar.style.width = `${value}%`;
});
